var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "imgextension": "png",
            "base": "",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "path": "day",
            "poititle": "Markers",
            "minZoom": 0,
            "maxZoom": 8,
            "name": "Daytime Render",
            "last_rendertime": 1598759779,
            "showlocationmarker": true,
            "world": "world",
            "defaultZoom": 1,
            "zoomLevels": 8
        }
    ],
    "map": {
        "cacheTag": "1598760175",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
