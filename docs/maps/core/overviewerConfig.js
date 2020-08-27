var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "minZoom": 0,
            "showlocationmarker": true,
            "world": "Core01",
            "name": "Daytime Render",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1598536680,
            "defaultZoom": 1,
            "poititle": "Markers",
            "zoomLevels": 10
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598536884",
        "controls": {
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
