var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "path": "day",
            "maxZoom": 8,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "base": "",
            "zoomLevels": 8,
            "world": "world",
            "minZoom": 0,
            "poititle": "Markers",
            "imgextension": "png",
            "last_rendertime": 1594245380,
            "defaultZoom": 1
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "compass": true
        },
        "cacheTag": "1594245831",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
