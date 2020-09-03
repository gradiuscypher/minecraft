var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "world": "world",
            "isOverlay": false,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "poititle": "Markers",
            "base": "",
            "imgextension": "png",
            "minZoom": 0,
            "defaultZoom": 1,
            "maxZoom": 8,
            "last_rendertime": 1599090979,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "zoom": true
        },
        "cacheTag": "1599091373",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
