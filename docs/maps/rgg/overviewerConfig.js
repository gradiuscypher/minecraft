var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "world": "world",
            "maxZoom": 8,
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597560979,
            "minZoom": 0,
            "zoomLevels": 8,
            "imgextension": "png",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "north_direction": 0,
            "isOverlay": false,
            "path": "day",
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597561363"
    },
    "worlds": [
        "world"
    ]
};
