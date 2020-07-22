var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595415758",
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1595415379,
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "path": "day",
            "minZoom": 0
        }
    ]
};
