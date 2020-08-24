var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1
    },
    "map": {
        "controls": {
            "compass": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1598295772",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "zoomLevels": 8,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "minZoom": 0,
            "path": "day",
            "poititle": "Markers",
            "name": "Daytime Render",
            "last_rendertime": 1598295379,
            "world": "world",
            "maxZoom": 8,
            "defaultZoom": 1,
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "world"
    ]
};
