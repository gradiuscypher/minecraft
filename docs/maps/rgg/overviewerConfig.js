var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        }
    },
    "map": {
        "controls": {
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599112971"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "imgextension": "png",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "path": "day",
            "last_rendertime": 1599112579,
            "north_direction": 0,
            "maxZoom": 8,
            "zoomLevels": 8
        }
    ]
};
