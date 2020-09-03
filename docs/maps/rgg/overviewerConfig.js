var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599127376",
        "controls": {
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true
        }
    },
    "tilesets": [
        {
            "north_direction": 0,
            "zoomLevels": 8,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "minZoom": 0,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1599126979,
            "poititle": "Markers",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "world": "world",
            "base": ""
        }
    ],
    "worlds": [
        "world"
    ]
};
