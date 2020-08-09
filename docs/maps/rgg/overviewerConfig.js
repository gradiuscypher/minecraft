var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "world": "world",
            "north_direction": 0,
            "base": "",
            "isOverlay": false,
            "last_rendertime": 1596930979,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "defaultZoom": 1,
            "maxZoom": 8,
            "poititle": "Markers",
            "minZoom": 0,
            "name": "Daytime Render",
            "path": "day",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "compass": true
        },
        "cacheTag": "1596931363",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
