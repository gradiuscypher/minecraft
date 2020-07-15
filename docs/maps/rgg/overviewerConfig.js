var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "minZoom": 0,
            "name": "Daytime Render",
            "last_rendertime": 1594835779,
            "north_direction": 0,
            "maxZoom": 8,
            "zoomLevels": 8,
            "base": "",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "poititle": "Markers",
            "world": "world"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "zoom": true,
            "spawn": true,
            "mapType": true
        },
        "cacheTag": "1594836130"
    },
    "worlds": [
        "world"
    ]
};
